REQUEST - RESPONSE
    request : continous stream of data (TCP)
    
    client sends a request
    server parses the request : finds the boundary, finds the request type (GET,POST..)
    server processes the request : serialising from binary to object, fetching data
    server sends response 
    clients parse the response : serialising from binary to object

    protocol buffer

    SSH : linux commands ls... etc
    RPC : remote procedural call -> client/any pgm calls a remote function call eg. online APIs
    DNS : uses UDP : id

    ------------------
    GET / HTTP 1.1
    Header
    <crlf>
    Body
    ------------------

    Request boundary id defined by protocol and message format

    If a request is too large it can be send by chunks/ small pieces (efficient, resumable, no info loss)


    - client writes/creates the request
    - req is broken into segments and packed as IP packets
    - at the server side : reorder the packets
    - process the request and sends back
    - at client deserialses the request

    CURL command

    curl -v --trace output.txt http://google.com

    == Info: Host google.com:80 was resolved.
    == Info: IPv6: (none)
    == Info: IPv4: 142.250.193.110
    == Info:   Trying 142.250.193.110:80...
    == Info: Connected to google.com (142.250.193.110) port 80
    => Send header, 73 bytes (0x49)
    0000: 47 45 54 20 2f 20 48 54 54 50 2f 31 2e 31 0d 0a GET / HTTP/1.1..
    0010: 48 6f 73 74 3a 20 67 6f 6f 67 6c 65 2e 63 6f 6d Host: google.com
    0020: 0d 0a 55 73 65 72 2d 41 67 65 6e 74 3a 20 63 75 ..User-Agent: cu
    0030: 72 6c 2f 38 2e 36 2e 30 0d 0a 41 63 63 65 70 74 rl/8.6.0..Accept
    0040: 3a 20 2a 2f 2a 0d 0a 0d 0a                      : */*....
    <= Recv header, 32 bytes (0x20)
    0000: 48 54 54 50 2f 31 2e 31 20 33 30 31 20 4d 6f 76 HTTP/1.1 301 Mov
    0010: 65 64 20 50 65 72 6d 61 6e 65 6e 74 6c 79 0d 0a ed Permanently..
    <= Recv header, 34 bytes (0x22)
    0000: 4c 6f 63 61 74 69 6f 6e 3a 20 68 74 74 70 3a 2f Location: http:/
    0010: 2f 77 77 77 2e 67 6f 6f 67 6c 65 2e 63 6f 6d 2f /www.google.com/
    0020: 0d 0a                                           ..
    <= Recv header, 40 bytes (0x28)
    0000: 43 6f 6e 74 65 6e 74 2d 54 79 70 65 3a 20 74 65 Content-Type: te
    0010: 78 74 2f 68 74 6d 6c 3b 20 63 68 61 72 73 65 74 xt/html; charset
    0020: 3d 55 54 46 2d 38 0d 0a                         =UTF-8..
    <= Recv header, 245 bytes (0xf5)
    0000: 43 6f 6e 74 65 6e 74 2d 53 65 63 75 72 69 74 79 Content-Security
    0010: 2d 50 6f 6c 69 63 79 2d 52 65 70 6f 72 74 2d 4f -Policy-Report-O
    0020: 6e 6c 79 3a 20 6f 62 6a 65 63 74 2d 73 72 63 20 nly: object-src 
    0030: 27 6e 6f 6e 65 27 3b 62 61 73 65 2d 75 72 69 20 'none';base-uri 
    0040: 27 73 65 6c 66 27 3b 73 63 72 69 70 74 2d 73 72 'self';script-sr
    0050: 63 20 27 6e 6f 6e 63 65 2d 58 6d 61 6a 4b 64 45 c 'nonce-XmajKdE
    0060: 2d 33 6a 67 66 2d 6a 7a 39 72 49 39 32 54 77 27 -3jgf-jz9rI92Tw'
    0070: 20 27 73 74 72 69 63 74 2d 64 79 6e 61 6d 69 63  'strict-dynamic
    0080: 27 20 27 72 65 70 6f 72 74 2d 73 61 6d 70 6c 65 ' 'report-sample
    0090: 27 20 27 75 6e 73 61 66 65 2d 65 76 61 6c 27 20 ' 'unsafe-eval' 
    00a0: 27 75 6e 73 61 66 65 2d 69 6e 6c 69 6e 65 27 20 'unsafe-inline' 
    00b0: 68 74 74 70 73 3a 20 68 74 74 70 3a 3b 72 65 70 https: http:;rep
    00c0: 6f 72 74 2d 75 72 69 20 68 74 74 70 73 3a 2f 2f ort-uri https://
    00d0: 63 73 70 2e 77 69 74 68 67 6f 6f 67 6c 65 2e 63 csp.withgoogle.c
    00e0: 6f 6d 2f 63 73 70 2f 67 77 73 2f 6f 74 68 65 72 om/csp/gws/other
    00f0: 2d 68 70 0d 0a                                  -hp..
    <= Recv header, 37 bytes (0x25)
    0000: 44 61 74 65 3a 20 53 75 6e 2c 20 32 31 20 4a 75 Date: Sun, 21 Ju
    0010: 6c 20 32 30 32 34 20 31 38 3a 30 36 3a 34 34 20 l 2024 18:06:44 
    0020: 47 4d 54 0d 0a                                  GMT..
    <= Recv header, 40 bytes (0x28)
    0000: 45 78 70 69 72 65 73 3a 20 54 75 65 2c 20 32 30 Expires: Tue, 20
    0010: 20 41 75 67 20 32 30 32 34 20 31 38 3a 30 36 3a  Aug 2024 18:06:
    0020: 34 34 20 47 4d 54 0d 0a                         44 GMT..
    <= Recv header, 40 bytes (0x28)
    0000: 43 61 63 68 65 2d 43 6f 6e 74 72 6f 6c 3a 20 70 Cache-Control: p
    0010: 75 62 6c 69 63 2c 20 6d 61 78 2d 61 67 65 3d 32 ublic, max-age=2
    0020: 35 39 32 30 30 30 0d 0a                         592000..
    <= Recv header, 13 bytes (0xd)
    0000: 53 65 72 76 65 72 3a 20 67 77 73 0d 0a          Server: gws..
    <= Recv header, 21 bytes (0x15)
    0000: 43 6f 6e 74 65 6e 74 2d 4c 65 6e 67 74 68 3a 20 Content-Length: 
    0010: 32 31 39 0d 0a                                  219..
    <= Recv header, 21 bytes (0x15)
    0000: 58 2d 58 53 53 2d 50 72 6f 74 65 63 74 69 6f 6e X-XSS-Protection
    0010: 3a 20 30 0d 0a                                  : 0..
    <= Recv header, 29 bytes (0x1d)
    0000: 58 2d 46 72 61 6d 65 2d 4f 70 74 69 6f 6e 73 3a X-Frame-Options:
    0010: 20 53 41 4d 45 4f 52 49 47 49 4e 0d 0a           SAMEORIGIN..
    <= Recv header, 2 bytes (0x2)
    0000: 0d 0a                                           ..
    <= Recv data, 219 bytes (0xdb)
    0000: 3c 48 54 4d 4c 3e 3c 48 45 41 44 3e 3c 6d 65 74 <HTML><HEAD><met
    0010: 61 20 68 74 74 70 2d 65 71 75 69 76 3d 22 63 6f a http-equiv="co
    0020: 6e 74 65 6e 74 2d 74 79 70 65 22 20 63 6f 6e 74 ntent-type" cont
    0030: 65 6e 74 3d 22 74 65 78 74 2f 68 74 6d 6c 3b 63 ent="text/html;c
    0040: 68 61 72 73 65 74 3d 75 74 66 2d 38 22 3e 0a 3c harset=utf-8">.<
    0050: 54 49 54 4c 45 3e 33 30 31 20 4d 6f 76 65 64 3c TITLE>301 Moved<
    0060: 2f 54 49 54 4c 45 3e 3c 2f 48 45 41 44 3e 3c 42 /TITLE></HEAD><B
    0070: 4f 44 59 3e 0a 3c 48 31 3e 33 30 31 20 4d 6f 76 ODY>.<H1>301 Mov
    0080: 65 64 3c 2f 48 31 3e 0a 54 68 65 20 64 6f 63 75 ed</H1>.The docu
    0090: 6d 65 6e 74 20 68 61 73 20 6d 6f 76 65 64 0a 3c ment has moved.<
    00a0: 41 20 48 52 45 46 3d 22 68 74 74 70 3a 2f 2f 77 A HREF="http://w
    00b0: 77 77 2e 67 6f 6f 67 6c 65 2e 63 6f 6d 2f 22 3e ww.google.com/">
    00c0: 68 65 72 65 3c 2f 41 3e 2e 0d 0a 3c 2f 42 4f 44 here</A>...</BOD
    00d0: 59 3e 3c 2f 48 54 4d 4c 3e 0d 0a                Y></HTML>..
    == Info: Connection #0 to host google.com left intact




SYNC - ASYNC
    contect switching
        sync:
            example : reading a file
            -> kernel : complete control over everything in the system. The kernel is also responsible for preventing and mitigating conflicts between different processes.
            -> driver : software that helps in communication between system and peripheral/hardware
            -> disk controller (SSD/Hard Drive) : circuit - communication between CPU and disk/CD/floppy etc
            -> gets back to kernel
        
            here kernel is waiting from 1st step to last, and it is being blocked, also kernel is IDLE

        async:
            - client can check the response :
                - Epoll : checking if it is ready frequently
                - callback
                    windows : IOCP : Input/output completion port (node in windows)
                    linux   : io_uring (OS) : completionist queue : the queue will be updated whrn the task is done (node in linux)
                    uses a new thread, that does the blocking task
            at backend, when a new req arrives, it is added to the queue, and promise is send to client => prvents client blocking



PUSH
    server contacts the client, without any requests
    bidirectional

    server send to application : android/apple
    
    cons 
        - when client cant handle all the pushes
        - client should be online


SHORT POLLING
    used when the process takes a lot of tym

    client has to enquire whether the job is done. (status)

    Working:
        client sends a request
        server immediatly responds with a handle (promise/ id)
        server continues to process
        client will poll (checks frequently) for status

    the server will only send response when the client requests, even though the process has been completed

    pros:
        simple
        long running process
        client can disconnect, (after getting the handle)
    cons:
        too many polls
        bandwidth
        resource wastage

    applications : Real-time dashboards, Chat applications

LONG POLLING

    client sends a request
    server responses immediatly with a handle
    serves continues the process
    client sends a poll
    server responses only when the process is complete


    pros:
        less chatty
        client can disconnect

    cons:
        latency will be there

SERVER SEND EVENTS:
    client sends an open request
    this will be open forevere
    server will be adding(writing) data to the response with '/n/n' at each messages end
    at client side it can be called using event source

    pros:
        real-time
        compatible with req res
    
    cons:
        client must be online
        traffic at client
        http 1.1 issue ( only 6 connections -> each connection each response )

PUBSUB
    publisher (server) publishes a message
    the published msg is in a channel
    the consumer subscibes a channel/topic
    when a new message arrives in a topic all the subsribers will be notified

CAR

STATFUL/STATELESS :
    stateless in best -> jwt -> not dependant of any data
