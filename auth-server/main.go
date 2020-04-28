package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/jrquadros/auth-server/config/enviroment"
	"github.com/jrquadros/auth-server/controller"
)

func main() {

	port := enviroment.GetEnviroment("SERVER_PORT")

	router := mux.NewRouter()

	router.HandleFunc("/login", controller.LoginHandler)

	println("Server running at port ", port)

	log.Fatal(http.ListenAndServe(port, router))

}
