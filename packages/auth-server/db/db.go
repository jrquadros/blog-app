package db

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	"github.com/jrquadros/auth-server/config/enviroment"
)

func GetDBCollection() (*mongo.Collection, error) {

	URI := enviroment.GetEnviroment("MONGODB_URI")

	client, err := mongo.NewClient(options.Client().ApplyURI(URI))

	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(context.Background())

	if err != nil {
		return nil, err
	}

	err = client.Ping(ctx, nil)

	if err != nil {
		return nil, err
	}

	collection := client.Database("blog").Collection("users")

	return collection, nil

}
