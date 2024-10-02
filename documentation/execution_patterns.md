Process and Threads :
        Process :
        set of instructions
        isolated memory -> no other process can read/access the particular memory
        PID
        will be scheduled by CPU:
            context switching when a process reads/writes ot any I/O op


    Thread :
        Light weighted process
        shared memory -> mutex


    Single Threaded Process :
        node 
        CPU waiting

    Multi-Processes :
        nginx/postgres
        memory:
            - each has its own memory
            - shared memory pool
        COW (copy on write)
            creates a copy when a process tries to change a page, and the copy is given to change
            example :
                If Process B tries to modify a memory page, 
                the operating system makes a copy of that page for Process B 
                so that Process A still has its original data intact

    Multi-threading : 
        apache,envoy
        race condition : one or more threads want one memory
        locks and latches : SQl -> same server -> one connection

    no of process = no of cores (individual processing unit)

Connection Establishment :

    client sends SYN 
        SYN : numbers ( sync sequence numbers)
    server sends the SYN/ACK
    client sends the ACK

    frame -> matches the MAC address on NIC 
    frame to OS

    1. server listens on address:port (app says to the kernel about the address and IP)
        an address should be given or it will be accecible from all(NIC) address ports.
    2. clients connects (client sends SYN)
        at SYN queue a new entry (matching to the process in queue) is added with (src ip,src port, dest ip, dest port)
    (kernel creates a handshake -> connection -> socket + arrays)
    4. kernel sends SYN ACK
    5. client send ACK
        check for a matching SYN in SYN queue
        connection created
        kernel adds full conection to Accept queue
        entry is removed from SYN queue
    6. connection accept
        accept()
        copy to process
        removed from Accept queue

    7. file descriptor is created
            whenever connection is needed it is used by the backend application


    At the listerner, kernel creates
        - socket
        - SYN array
        - Accept array

    on socket can have many connections

    Backend connection failure
        - TCP
        - TLS
        - req not delivered
        - CPU full
        - being processed
    Shady clients (clients not sending ack) SYN flooding
    Small queues

Sending and Reading data :
    kernel creates 4 queues
        - SYN :
        - Accept :
        - Send buffer :
        - Receiver buffer :
    Receive Data :
        Client sends data on a connection
            NIC will receive the frame -> parsed (IP) -> OS -> Port /address
        Kernel puts data on receive queue
            (without backend asking)
        Kernel acks -> may be delayed => (waiting to receive a bunch of data)
        Backend app calls reads()
            copies from read queue to the process memory
            kernel discards it from its memory

            (backend points to this loc -> kernel)

            raw encrypted TCP data

            TLS -> decrypted with the help of HTTPs package we have added -> CPU
            after parsing (libraries) REQUEST OBJECT is created and populated


    Send Data :
        writes the data in memory
        when send() is called the data is copied to SEND BUFFER
        when the buffer size is full, data is send to client
        when client ACKs -> send buffer's corresponding entry is deleted



Listner Acceptor Reader :
    Listner :
        the process that calls the listen
        passes address and port
        returns so id and socket number

    Acceptor :
        access to socket id
        calls accept 
        return file descriptor

    Reader : 
        read the connection

    example:
        listener - waits for incoming connections from a client on a port
        acceptor - when a client initiates the connection -> listener passes to acceptor -> creates a new socket -> frees the listener
        reader - reads the data send by the client

    port reusing 

Idempotency:
    retring without any effect
    GET idempotent
    POST use a request ID

Nagle's Algorithm
    waiting for the segment to be full inorder to send data
    curl disabled it

Proxy :

    client and internet 

    a client connects to a proxy
    proxy connects to the server
    the client is unknown to the server

    A user located in a country with restricted access to certain websites might use a proxy server located in a different country to bypass these restrictions. The server only sees the request from the proxy server and not from the original client.

    not encrypted

    adv :
        caching
        anonymus
        blocks sites

Reverse Proxy :
    the server makes requests to something on backend
    client only knows the final destination
    not about the load balancing

    When you visit a large website like Facebook, your request may first hit a reverse proxy like Nginx or HAProxy, which then forwards your request to one of the many backend servers in the data center. This process helps distribute the load across many servers, ensuring quick response times and avoiding overloading a single server.


    a load balancer is always reverse proxy but not vv

Load Balancer :
    balance requests between backends

    layer 4
        for a single connction all it will use a single backend
        no data inspection

    layer 7
        any logical request -> new backend
        understands the segment
        all segment -> req unit -> one server



VPN :
    A VPN creates an encrypted "tunnel" between your device and a VPN server
    All your internet traffic is routed through this secure tunnel, encrypting it in the process.

    secured
    encrypted



SSE:
    








    



        










     
    



    

        
    
