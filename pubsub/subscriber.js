import amqp from 'amqplib';

const msg={number:process.argv[2]};

connect();

async function connect () {
    try{
        const amqpServer='amqps://llevbizy:4HaKJROU5K0G7nWyoBCGXoZjkQw9QEux@puffin.rmq2.cloudamqp.com/llevbizy';
        const connection=await amqp.connect(amqpServer);
        const channel= await connection.createChannel();
        await channel.assertQueue('jobs');
        channel.consume("jobs",message=>{
            console.log(message.content.toString());
        })
        // await channel.close();
        // await connection.close();

    }catch(error){
        console.log(error);
    }
}

