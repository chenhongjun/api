package main

import (
	"flag"
	"fmt"
	"math/rand"
	"time"

	"github.com/chenhongjun/api/print_service/configs"
	"github.com/chenhongjun/api/print_service/internal/server"
	"github.com/chenhongjun/api/print_service/internal/version"
)

func main() {
	// 设置伪随机数种子
	rand.Seed(time.Now().UnixNano())
	// 查看版本
	var verbose bool
	flag.BoolVar(&verbose, "v", false, "show build info")
	flag.Parse()
	if verbose {
		fmt.Println(version.Version())
		return
	}

	// 加载配置
	configs.Load()

	// run server
	var server server.Server
	server.Run(configs.Server.GrpcPort)
}

// curl -X POST  http://127.0.0.1:29061/v1/disklessservice/createtarget -d '{"flow_id":"test","type":"1", "volume_id":125, "image_name":"os.image"}'
// curl -X POST  http://127.0.0.1:29061/v1/disklessservice/deletetarget -d '{"flow_id":"test","type":"1", "volume_id":125, "image_name":"os.image"}'
