#########################################################################                                                                    ##
##   0. Imports                                                                                                                            ##
#########################################################################

# 0.1 Import Flask, jsonify and render_template
from flask import Flask, jsonify, render_template, send_from_directory

# 0.3 Import SQLAlchemy
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import Session

print("\n\n")
print("Server Dev Internal Debugging Prompts:\n")


#########################################################################
##  3. Starting DB                                                         
#########################################################################
db_path = "sqlite:///database/movies.sql"
engine = create_engine(db_path)


#########################################################################
##   10. Start Flask                                                   ##
#########################################################################


# 10.1 Set app name as "app" and start Flask
app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True


# 10.2 Define what to do when a user hits the index route
@app.route("/")
def welcome():
    # List all api routes
    return render_template("index.html")


# Return static HTML file with JS code
# Ideally would serve from independent web server, but not practical in test environment
#def home():
    #return render_template ("index.html")


# 10.3 Define routes to create the APIs that will fed the JavaScript
@app.route("/api/movie/runtime")
def year():
    session = Session(bind=engine)
    sql_query = "select imdbID, Title, Year, Runtime, Genre, Rated, imdbVotes, imdbRating, Country, Language from test"
    movies = engine.execute(sql_query).fetchall()
    session.close()

    movies_lst = []

    for row in movies:
    
        try:
            movies_lst.append({
                    "id":row[0],
                    "title":row[1],
                    "year":int(row[2]),
                    "votes":int(row[6].replace(",","")),
                    "Runtime":int(row[3].strip().lower().replace(" min","")),
                    "country": row[8].split(",")[0],
                    "language": row[9].split(",")[0]
                      })
        except:
            pass
    

# Return dictionary as a JSON file for JS processing
    return(jsonify(movies_lst))


@app.route("/api/movie/rating")
def ratings():
    session = Session(bind=engine)
    sql_query = "select imdbID, Title, Year, Runtime, Genre, Rated, imdbVotes, imdbRating, Language, Country from test"
    movies = engine.execute(sql_query).fetchall()
    session.close()
    
    movies2_lst = []

    for row in movies:
    
        try:
            movies2_lst.append({
                    "id":row[0],
                    "title":row[1],
                    "imdbVotes":int(row[6].replace(",","")),
                    "imdbRating":float(row[7]),
                    "year":float(row[2]),
                    "language": row[8].split(",")[0],
                    "country": row[9].split(",")[0]
                      })
        except:
            pass
    
    # Return dictionary as a JSON file for JS processing
    return(jsonify(movies2_lst))



# 10.8 Define route for bubble plot here
@app.route("/runtime-by-country")
def country1():
    return render_template ("runtime-by-country.html")


# 10.8 Define route for the movies viz
@app.route("/runtime-by-language")
def language():
    return render_template ("runtime-by-language.html")

@app.route("/imdb-by-country")
def country2():
    return render_template ("imdb-by-country.html")

@app.route("/imdb-by-language")
def language2():
    return render_template ("imdb-by-language.html")


# 10.8 Define route for the movies viz
@app.route("/movies")
def linechart():
    return render_template ("movies.html")




# 4. Define what to do when a user hits the /about route
@app.route("/about")
def about():
    print("Server received request for 'About' page...")
    return "Welcome to my 'About' page!"


if __name__ == "__main__":
    app.run(debug=True)
