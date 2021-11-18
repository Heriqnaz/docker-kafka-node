import * as kafka from "kafka-node";
import * as fs from "fs";

const client = new kafka.KafkaClient({kafkaHost: "kafka:9092"});
const producer = new kafka.Producer(client);
const fileName = `${__dirname}/data.json`;

const stream = fs.createReadStream(fileName, {encoding: 'utf8'});
sendStream(stream).catch((err) => {
  console.error("error in sendChunks: ", err)
});

async function sendStream(readable) {
  for await (const chunk of readable) {
    const payload = [{ topic: "test_topic", messages: chunk}];
    producer.send(payload, function(error, result) {
      console.log("Sending payload to Kafka");
      if (error) {
        console.log( "Sending payload failed: ", error);
      } else {
        console.log("Sending payload result");
      }
    });
  }
}
