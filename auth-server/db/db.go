package db

import (
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func GetDBCollection() {
	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:27017"))

}
