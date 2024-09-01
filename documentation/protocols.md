Protocols:
    set of rules

Properties:
    Data format : 
        text 
        binary
    Transfer modes :
        message based : UDP,HTTP -> a message has a start and end
        stream : TCP,WebRTC -> stream of bytes
    Addressing System :
        DNS
        IP
        MAC

        in case of HTTP DNS resolves IP, IP resolves MAC address
        IP : has source and target
    Direction :
        uni
        bidirectional
        half/full duplex
    State :
        Stateful : TCP, gRPC, apache thrift
        Stateless : UDP,HTTP
    Routing:
        proxy
    Error :
        
    FLow and congession:

OSI: 
    standard for using different communication medium
    upgrade network equipments
    each layer separate

    Layers:
        Application  : libraries 
        Presentation : encoding(utf-8) and serialization : JSON/object/array to string 
        Session      : TLS-connection establishment, set state
        Transport    : TCP UPD : segments datagrams - protocols (every protocol is build on top of TCP/UDP) - port
                            proxy  and firewall -> block ip
                            reverse proxy -> 
        Network      : IP - routing - packets
                            vpn : puts the packet in another IP
        Data Link    : Frames - MAC address
        Physical     : electric signals, radio waves


        example sender POST req to an HTTPS:
            Application  : a req with JSON values
            Presentation : JSON is serialized to flat byte strings
                                bytes([72, 101, 108, 108, 111])  # Equivalent to b'Hello'
            Session      : establish TCP connection, establish TLS connection (encryption)
            Transport    : SYN req to port 443(HTTPS)
            Network      : add source and dest to IP packets
            Data Link    : each packet->frame->add src and dest MAC address (ARP)
            Physical     : each frame is a string of bits -> converted to waves

        example receiver POST req to an HTTPS:
            Application  : 
        
IP:
    a.b.c.d/x -> x network bits
        example : 92.168.254.0/24
            24(92.168.254) bits are network => 2^24 
            8(0) => host
    subnet mask : checks whether an IP is in the same subnet or not

    Host A and B can directly communicate if both are in same subnet - MAC address

    If A and B are in dif subnets : it will communicate through gateway

    IP : header + data (20 + 16) bytes

    time to live (number of routes/host) : avoid infinite loop : 128
        TRACE ROUTE/ROUTER ROUTE when a packet's time to live becomes 0 -> icmp message is send to source ip

    ECN :explicit congession notification

    ICMP : Internet control message protocol 
        level 3
        sends infomational messages ->
            - fragmentation needed
            - host/port unreachable
            - packet expiry
        TCP black hole :  icmp is disabled, but fragmentation needed
        trace route 

        command : traceroute <ip>


UDP:
    layer 4
    ports
    stateless
    no prior connection
    ports - multiplexing and demultiplexing

    header :8 byte

    uses:
        DNS :port 53
        WebRTC
        VPN

    no handshake, no order, no reliability, no ack
    used for attacks

    flow control-> server can handle
    congession control -> router can handle
    easily spoofed

TCP:
    layer 4
    ports
    contols transmission
    handshake => stateful

    header : 20 byte

    usecases:
        bi directional connection
        web 

    connection -> layer 5 - session - file discriptor

    a hash will be created with source port, src ip, dest port, dest ip and will be stored in the OS -> connection

    retransmission

    ack ackN => all packets to N (n-1,n-2..) are received

TLS:
    transport layer security
    forward secrecy -> RSA -> ISP all are recorded
    tls 1.3 -> 2 private keys and 1 public key is used

HTTP :
    req :
        method : get/post/...
        path : /about (after first /)
        protocol : http 1/..
        header : (key value pair) content len
    
    res : 

    http is build on top of TCP => 1st step is connection

    HTTP 1.0 -> new connection for each req -> only limited CPU
        no buffereing
        response should be send together


    HTTP 1.1 ->
        pipelining -> blocking for order -> disabled -> Line of order


WEBSOCKET : 
    bidirectional communication 
    build on top of http 1.1

    handshake :
        get 1.1 upgrade
        101 switching protocol

HTTP 2 :
    streams 

    HTTP 1.1 -> in a tcp connection -> one req at a tym (busy)
    client -> odd numbered streams
    server -> even numbered streams

    no order required -> but TCP has ordering

    HTTP push : when sending req for index.html -> server also sends main.js index.css etc
     -> wastage of resources , client may already cached

    Pros :
        streams (multiplexing over a single connection)
        server push
        secure by default (rules in routers, update routers)

    Cons :
        TCP head of line blocking ( tcp needs order, if a packect ex:2 is lost -> all other packets from 2 t oetc is dropped
        server push
        High CPU usage ( read all streams )


HTTP 3 :
    streams on top of UDP (QUIC)
    in quic -> servers odd and client even number of streams
    solves :
        -> head of line blocking
        -> 
    pros :
        connection + TLS -> one handshake (automatically)
        congession control
        connection migration (connection ID) -> when we switch network 
            attacker can send its own data via connectionID
        header compression algorithm

gRPC :
    Google remote procedural call

    HTTP 2

    streams

    protocol buffers (binary) : smaller payload and faster communication instead of XML/JSON

    .proto is substitute for swagger open API

    GRPC is faster compared to  HTTP => streaming/multiplexing (HTTP 2), binary data

    gRPC modes :
        unary : request/response
            Fetching a user profile
        client streaming (many req, one response)
            Uploading a large file
        server streaming (one req, many response)
            Real-time data feed
        bidirectional 
            Chat application

    no browser support (HTTP 2)
        gRPC-Web: Allows gRPC to be used in web browsers by translating gRPC calls to HTTP/1.1 or HTTP/2

    TLS encryption by default

    Working :
        create a service (.proto)
        generate code from .proto (strongly typed languages) using protoc : protobuf compiler
        set up server
        set up client

        in client a new stub is created
        calls a service
        req -> serialized and send
        server -> deserialises -> works
        response serialises
        and sends to client


    Microservices, internal APIs, real-time apps



WebRTC :
    peer to peer (no server in between)
    earlier -> UDP
    fast

    default gateway:
         device on a network that routes traffic from a local network to other networks, the internet (router)
         Devices on a local network rely on the default gateway to access the internet

    NAT : 
        NETWORK ADDRESS TRANSLATION
        one to one
        address restricted
        port restricted
        symmetric
    
    STUN : 
        SESSION TRAVERSAL UTILITIES for NAT
        a server which gives the public ip and port of a System, through NAT

    TURN : 
        TRAVERSAL USING RELAYS around NAT
        symmetic NAT
        users a server to connect between machines
        TURN server allocates an address, e.g., 198.51.100.20:3478, which is used as an intermediary to pass media between the peers

    using STUN and TURN -> collects all ways that an external system can connect to the machine (local ip, ip from STUN (Reflexive addresses), ip from TURN (Relayed addresses)

    ICE :
        INTERACTIVE CONNECTIVITY ESTABLISHMENT
        ice collects all local ip addresses, reflexive addresses 

        {
            "candidate": "candidate:842163049 1 udp 1677729535 192.168.1.5 58203 typ host",
            "sdpMid": "audio",
            "sdpMLineIndex": 0
        }

        {
            "candidate": "candidate:842163049 1 udp 1677729535 203.0.113.45 58203 typ srflx raddr 192.168.1.5 rport 58203",
            "sdpMid": "audio",
            "sdpMLineIndex": 0
        }

        {
            "candidate": "candidate:1010342407 1 udp 41885439 198.51.100.20 3478 typ relay raddr 192.168.1.5 rport 58203",
            "sdpMid": "audio",
            "sdpMLineIndex": 0
        }

        all these addresses are send thorugh SDP to the remote peer




    SDP :
        SESSION DESCIPTION PROTOCOL
        includes ice candidates, networking options, security options, media options etc
        SDP is the important part of the WebRTC

    

    Signaling the SDP :


    Steps : A-localclient B-remoteclient
        A wants to connect to B
        A creates an OFFER (SDP)  -> all ice candidates , media, security etc
        B gets the offer from A
        B creates an ANSWER (response to OFFER) and sends to A
        connection created


        

        
    Pros:
        Peer to Peer, low latency
        Standarised API
    
    Cons:
        STUN and TURN (more)
        p2p fall for multiple














    
        



