package configs

import (
	"fmt"

	"github.com/spf13/viper"
)

type serverConfig struct {
	ServiceIp string
	HttpPort  int16
	GrpcPort  int16
}

var (
	Server serverConfig
)

func Load() error {
	viper.SetConfigName("app")
	viper.AddConfigPath("./conf")
	viper.SetConfigType("yaml")
	if err := viper.ReadInConfig(); err != nil {
		fmt.Println("viper ReadInConfig err: ", err)
		return err
	}
	app := struct {
		Server *serverConfig
	}{
		Server: &Server,
	}
	if err := viper.Unmarshal(&app); err != nil {
		fmt.Println("viper decode err: ", err)
	}
	return nil
}
