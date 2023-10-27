package server

import (
	"fmt"
	"log"
	"net"

	pb "github.com/chenhongjun/api/print_service/pkg/chippergrpc2"

	"google.golang.org/grpc"
)

type Server struct {
	pb.UnimplementedChipperGrpcServer
}

func (s *Server) Run(grpcPort int16) {

	// 初始化grpc服务
	g := grpc.NewServer()
	pb.RegisterChipperGrpcServer(g, s)

	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", grpcPort))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	log.Println("Serving gRPC on 0.0.0.0" + fmt.Sprintf(":%d", grpcPort))

	// 协程监听grpc端口
	if err := g.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

}
