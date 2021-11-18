import "reflect-metadata";
import * as kafka from "kafka-node";
import { createConnection } from "typeorm";
import {Employees} from "../type";
import {EmployeesModel} from "./model/EmployeesModel";

const client = new kafka.KafkaClient({kafkaHost: "kafka:9092"});
const consumer = new kafka.Consumer( client, [{ topic: "test_topic", partition: 0 }] );

consumer.on("message", async function(message) {
  try {
    await createConnection();
    const data1 = JSON.parse(message.value);
    const data: Employees[] = data1.Employees;
    await EmployeesModel.setEmployees(data);
    console.log("Done!");
  } catch(error) {
    console.log('catch>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', error);
  }
});
