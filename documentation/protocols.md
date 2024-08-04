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

        



