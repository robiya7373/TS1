import "./Tools.scss";
import { useState } from "react";
import promotheus from "../../Assets/Icons/promotheus.svg";
import loki from "../../Assets/Icons/loki.svg";
import bitbucket from "../../Assets/Icons/bitbucket.svg";
import gitlab from "../../Assets/Icons/gitlab.svg";
import kotlin from "../../Assets/Icons/kotlin.svg";
import android from "../../Assets/Icons/android-icon.svg";
import java from "../../Assets/Icons/java.svg";
import azure from "../../Assets/Icons/azuro.svg";
import gcp from "../../Assets/Icons/gap.svg";
import digitalocean from "../../Assets/Icons/digital-ocean.svg";
import aws from "../../Assets/Icons/aws.svg";
import kubernates from "../../Assets/Icons/cubernetes.svg";
import elk from "../../Assets/Icons/elk.svg";
import grafana from "../../Assets/Icons/grafana.svg";
import terraform from "../../Assets/Icons/terraform.svg";
import ios from "../../Assets/Icons/ios.svg";
import swift from "../../Assets/Icons/swift.svg";
import flutter from "../../Assets/Icons/flutter.svg";
import next from "../../Assets/Icons/next.svg";
import react from "../../Assets/Icons/react.svg";
import js from "../../Assets/Icons/js.svg";
import balsamic from "../../Assets/Icons/balsamic.svg";
import invision from "../../Assets/Icons/invision.svg";
import figma from "../../Assets/Icons/figma.svg";
import docker from "../../Assets/Icons/docker.svg";
import postgresql from "../../Assets/Icons/postgreSql.svg";
import python from "../../Assets/Icons/python.svg";
import node from "../../Assets/Icons/node-js.svg";
import php from "../../Assets/Icons/php.svg";
import go from "../../Assets/Icons/go.svg";
import antdesign from "../../Assets/Icons/ant-design.svg";
import gatsby from "../../Assets/Icons/gastby-js.png";
import vue from "../../Assets/Icons/vue.svg";
import principle from "../../Assets/Icons/prinsple.svg";
import sketch from "../../Assets/Icons/sketch.svg";
import adobe from "../../Assets/Icons/adobe-suit.svg";
import youtrack from "../../Assets/Icons/you-track.svg";
import appium from "../../Assets/Icons/apptium.svg";
import cypress from "../../Assets/Icons/cypres.svg";
import jmeter from "../../Assets/Icons/jmeter.svg";
import mongo from "../../Assets/Icons/mango-db.svg";
import cassandra from "../../Assets/Icons/cassandra.svg";
import sass from "../../Assets/Icons/sass.svg";
import material from "../../Assets/Icons/mui.svg";
import zeplin from "../../Assets/Icons/zeplin.svg";
import illustrator from "../../Assets/Icons/ilustrator.svg";
import lottie from "../../Assets/Icons/lottie-2.svg";
import photoshop from "../../Assets/Icons/photoshop.svg";

function Tools() {
  const [category, setCategory] = useState("");

  const Categories = [
    {
      name: "devops",
      label: "Devops",
    },
    {
      name: "frontend",
      label: "Frontend",
    },
    {
      name: "backend",
      label: "Backend",
    },
    {
      name: "mobile",
      label: "Mobile",
    },
  ];
  const toolsArray = [
    {
      id: 1,
      name: "Promotheus",
      image: promotheus,
      category: "devops",
    },
    {
      id: 1,
      name: "Loki",
      image: loki,
      category: "mobile",
    },
    {
      id: 1,
      name: "Bitbucket",
      image: bitbucket,
      category: "front",
    },
    {
      id: 1,
      name: "Promotheus",
      image: promotheus,
      category: "backend",
    },
    {
      id: 1,
      name: "Promotheus",
      image: promotheus,
      category: "devops",
    },
    {
      id: 1,
      name: "Promotheus",
      image: promotheus,
      category: "devops",
    },
    {
      id: 1,
      name: "Promotheus",
      image: promotheus,
      category: "devops",
    },
    {
      id: 1,
      name: "Promotheus",
      image: promotheus,
      category: "devops",
    },
    {
      id: 1,
      name: "Promotheus",
      image: promotheus,
      category: "devops",
    },
    {
      id: 1,
      name: "Promotheus",
      image: promotheus,
      category: "devops",
    },
    {
      id: 1,
      name: "Promotheus",
      image: promotheus,
      category: "devops",
    },
    {
      id: 1,
      name: "Promotheus",
      image: promotheus,
      category: "devops",
    },
    {
      id: 1,
      name: "Promotheus",
      image: promotheus,
      category: "devops",
    },
    {
      id: 1,
      name: "Promotheus",
      image: promotheus,
      category: "devops",
    },
    {
      id: 1,
      name: "Promotheus",
      image: promotheus,
      category: "devops",
    },
  ];

  return (
    <section className='tools-section' id='tools'>
      <div className='container'>
        <div className='tools-wrapper'>
          <h2 className={`tools-wrapper__title `}>Tools</h2>
          <ul className='tools-wrapper__check-list'>
            {Categories.map((item, id) => (
              <li
                key={id}
                className={`tools-wrapper__check-list-item ${
                  item.name === category ? "active" : ""
                }`}>
                <div onClick={() => setCategory(item.name)}>{item.label}</div>
              </li>
            ))}
          </ul>
          <ul className='tools-wrapper__icon-list'>
            {toolsArray.map((item) => (
              <li
                key={item.name}
                className='tools-wrapper__icon-item dev'
                style={{
                  background: `${item.category === category ? "red" : ""}`,
                }}>
                <img
                  className='tools-wrapper__icon-img'
                  src={item.image}
                  alt='Promotheus'
                  width={24}
                  height={24}
                />
                <p className='tools-wrapper__icon-title'>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Tools;
