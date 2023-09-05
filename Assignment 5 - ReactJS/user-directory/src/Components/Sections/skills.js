const Skills = (props) => {
  return (
    <div className="skills">
      {props.skills.map((skill, index) => {
        if (skill)
          return (
            <p className="skill" key={index}>
              {skill}
            </p>
          );
        else return null;
      })}
    </div>
  );
};

export default Skills;
