// React
import React, { useState, useCallback, Fragment } from "react";

// Libraries
import { motion, AnimatePresence } from "framer-motion";
import { useForm, useFieldArray } from "react-hook-form";
import { Series, Audio } from "remotion";
import { Player } from "@remotion/player";
import { useDropzone } from "react-dropzone";

// Components
import Sliding from "./scenes/SlidingBackground";
import Large from "./scenes/LargeTitle";
import Stagger from "./scenes/Stagger";
import Pulse from "./scenes/Pulse";
import Person from "./scenes/Person";
import Outro from "./scenes/Outro";

// Assets
import intro from "./assets/audio/intro.mp3";
import middle from "./assets/audio/middle.mp3";
import end from "./assets/audio/end.mp3";

import "@fortawesome/fontawesome-free/css/all.css";

const Sequence = (props) => {
  return (
    <Fragment>
      <Audio src={intro} />
      <Series>
        <Series.Sequence durationInFrames={37}>
          <Large />
        </Series.Sequence>
        <Series.Sequence durationInFrames={52}>
          <Stagger />
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <Sliding />
        </Series.Sequence>
        <Series.Sequence durationInFrames={65}>
          <Pulse />
        </Series.Sequence>
        {props.scenes.slice(0, props.scenes.length - 1).map((scene, index) => (
          <Series.Sequence key={index} durationInFrames={90}>
            <Audio src={middle} />
            <Person {...scene} />
          </Series.Sequence>
        ))}
        {props.scenes.slice(props.scenes.length - 1).map((scene, index) => (
          <Series.Sequence key={index} durationInFrames={270}>
            <Audio src={end} />
            <Series>
              <Series.Sequence durationInFrames={90}>
                <Person {...scene} />
              </Series.Sequence>
              <Series.Sequence durationInFrames={180}>
                <Outro />
              </Series.Sequence>
            </Series>
          </Series.Sequence>
        ))}
      </Series>
    </Fragment>
  );
};

const PersonCard = (props) => {
  const onDrop = useCallback((files) => {
    const preview = URL.createObjectURL(files[0]);

    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      const reader = new FileReader();

      reader.onloadend = () => {
        props.setValue(`persons.${props.index}.image`, reader.result);
      };

      reader.readAsDataURL(xhr.response);
    };

    xhr.open("GET", preview);
    xhr.responseType = "blob";
    xhr.send();
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    maxFiles: 1,
    onDrop,
  });

  const handleDelete = () => {
    props.remove(props.index);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="person-wrapper"
    >
      <i className="far fa-times-circle close" onClick={handleDelete}></i>
      <div
        className="avatar"
        style={{
          backgroundImage:
            props.watch(`persons.${props.index}.image`) &&
            `url('${props.watch(`persons.${props.index}.image`)}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {!props.watch(`persons.${props.index}.image`) && (
          <i className="far fa-image"></i>
        )}
      </div>
      <div className="info">
        <input
          placeholder="Name"
          {...props.register(`persons.${props.index}.name`)}
        />
        <input
          placeholder="Position (e.g. Software Engineer)"
          {...props.register(`persons.${props.index}.subtitle`)}
        />
      </div>
    </motion.div>
  );
};

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const { control, register, watch, setValue } = useForm();
  const { fields, remove, prepend } = useFieldArray({
    control,
    name: "persons",
  });

  const handleAddPerson = () => {
    prepend({ name: "", position: "", image: "" });
  };

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const persons = watch("persons");

  return (
    <div className="app">
      <AnimatePresence>
        <div className="action-area">
          {(persons || []).map((person, index) => (
            <PersonCard
              key={person.id}
              index={index}
              person={person}
              register={register}
              remove={remove}
              watch={watch}
              setValue={setValue}
            />
          ))}
          {(persons || []).length > 0 && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="button"
            >
              <p>Drag &amp; drop image to avatar area to apply it</p>
            </motion.div>
          )}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="button"
            onClick={handleAddPerson}
          >
            <i className="fas fa-plus"></i> Add person
          </motion.div>
        </div>
        <div className="player-area">
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="player-container"
          >
            <Player
              component={Sequence}
              durationInFrames={350 + (persons || []).length * 90}
              compositionWidth={1920}
              compositionHeight={1080}
              fps={30}
              style={{
                width: "100%",
                height: "100%",
              }}
              controls
              doubleClickToFullscreen
              inputProps={{
                scenes: watch("persons"),
              }}
            />
            {(persons || []).length < 2 && (
              <motion.div
                className="player-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                2 or more persons are required to watch
              </motion.div>
            )}
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );

  return (
    <div className="wrapper wrapper--vh">
      <h1 className="title" style={{ top: 250 }}>
        Showtime
      </h1>
      <h1 className="title title--outlined" style={{ top: 350 }}>
        Composer
      </h1>
      <motion.div className="control-wrapper">
        <AnimatePresence>
          {fields.map((person, index) => (
            <PersonCard
              key={person.id}
              index={index}
              person={person}
              register={register}
              remove={remove}
              watch={watch}
              setValue={setValue}
            />
          ))}
        </AnimatePresence>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="button"
        >
          <p>Drag &amp; drop image to avatar area to apply it</p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="button"
          onClick={handleAddPerson}
        >
          <i className="fas fa-plus"></i> Add person
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`button ${fields.length < 2 && "button--disabled"}`}
          onClick={handleToggleModal}
        >
          {fields.length < 2 ? (
            "2 persons required to watch"
          ) : (
            <Fragment>
              <i className="fas fa-play"></i> Watch
            </Fragment>
          )}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-backdrop"
          >
            <motion.div
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 300, opacity: 0 }}
              className="modal-container"
            >
              <i
                className="far fa-times-circle close"
                onClick={handleToggleModal}
              ></i>
              <Player
                component={Sequence}
                durationInFrames={350 + watch("persons").length * 90}
                compositionWidth={1920}
                compositionHeight={1080}
                fps={30}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                controls
                doubleClickToFullscreen
                inputProps={{
                  scenes: watch("persons"),
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
