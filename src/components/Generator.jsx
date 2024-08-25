import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";

const Header = ({ index, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-400">
          {index}
        </p>
        <h4 className="text-md sm:text-xl md:text-2xl text-center">{title}</h4>
      </div>
      <p className="text-xs sm:text-sm md:text-base mx-auto text-center">{description}</p>
    </div>
  );
};

const Generator = ({poison,setPoison,goals,setGoals,muscles, setMuscles,updateWorkout}) => {
  const [showModel, setShowModel] = useState(false);
 

  const toggleModel = () => {
    setShowModel(!showModel);
  };

  const handleMuscleGroup = (muscleGroup) => {
    const isAlreadySelected = muscles.includes(muscleGroup);

    if (isAlreadySelected) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
    } else if (muscles.length < 3 || poison !== "individual") {
      setMuscles(poison === "individual" ? [...muscles, muscleGroup] : [muscleGroup]);
      if (poison !== "individual" || muscles.length === 2) {
        setShowModel(false);
      }
    }
  };

  const handlePoisonSelection = (type) => {
    setPoison(type);
    setMuscles([]);
  };

  return (
    <SectionWrapper id={'generate'} header={"Generate Your Workout"} title={["It's", "Huge", "O'Clock"]}>
      <Header
        index={"01"}
        title={"Pick Your Poison"}
        description={"Select the workout you wish to enjoy!"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
        {Object.keys(WORKOUTS).map((type, id) => (
          <button
            onClick={() => handlePoisonSelection(type)}
            className={`bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-2 sm:py-3 rounded-lg ${
              type === poison ? "border-blue-600" : "border-blue-400"
            }`}
            key={id}
          >
            <p className="capitalize text-xs sm:text-sm md:text-base">
              {type.replaceAll("_", " ")}
            </p>
          </button>
        ))}
      </div>
      <Header
        index={"02"}
        title={"Lock on Targets"}
        description={"Select the muscles judged for annihilation!"}
      />
      <div className="bg-slate-950 border border-blue-400 flex flex-col rounded-lg">
        <button
          onClick={toggleModel}
          className="relative flex items-center p-2 sm:p-3 justify-center"
        >
          <p className="capitalize text-xs sm:text-sm md:text-base">
            {muscles.length === 0 ? "Select Muscle Groups" : muscles.join(", ").replaceAll("_", " ")}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModel && (
          <div className="flex flex-col p-2 sm:p-3">
            {(poison === "individual" ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map(
              (muscleGroup, id) => (
                <button
                  key={id}
                  onClick={() => handleMuscleGroup(muscleGroup)}
                  className={`hover:text-blue-300 duration-200 text-xs sm:text-sm md:text-base ${
                    muscles.includes(muscleGroup) ? "text-blue-400" : ""
                  }`}
                >
                  <p className="uppercase">{muscleGroup.replaceAll("_", " ")}</p>
                </button>
              )
            )}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective!"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
        {Object.keys(SCHEMES).map((scheme, id) => (
          <button
            onClick={() => setGoals(scheme)}
            className={`bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-2 sm:py-3 rounded-lg ${
              scheme === goals ? "border-blue-600" : "border-blue-400"
            }`}
            key={id}
          >
            <p className="capitalize text-xs sm:text-sm md:text-base">
              {scheme.replaceAll("_", " ")}
            </p>
          </button>
        ))}
      </div>
      <Button func={updateWorkout} text={"Formulate"}></Button>
    </SectionWrapper>
  );
};

export default Generator;
