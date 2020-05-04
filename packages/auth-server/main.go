package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/jrquadros/auth-server/config/enviroment"
	"github.com/jrquadros/auth-server/controller"
	"github.com/rs/cors"
)

func main() {

	c := cors.New(cors.Options{})

	port := enviroment.GetEnviroment("SERVER_PORT")

	router := mux.NewRouter()

	router.HandleFunc("/login", controller.LoginHandler)

	println("Server running at port ", port)

	log.Fatal(http.ListenAndServe(port, c.Handler(router)))

}
