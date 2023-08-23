const Skills = (props) => {
  return (
    <div className="skills">
      {props.skills.map((skill, index) => {
        return (
          <p className="skill" key={index}>
            {skill}
          </p>
        );
      })}
    </div>
  );
};

export default Skills;
