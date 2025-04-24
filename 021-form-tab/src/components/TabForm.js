import { useState } from "react";
import Intrests from "./Intrests";
import Profile from "./Profile";
import Settings from "./Settings";

function TabForm() {
  const [data, setData] = useState({
    name: "Rajesh",
    age: "20",
    email: "akshay@gmail.com",
    intrests: ["coding", "music"],
    theme: "dark",
  });

  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.name = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.name = "Email is not valid";
        }

        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Intrest",
      component: Intrests,
      validate: () => {
        const err = {};
        if (data.intrests.length < 1) {
          err.intrests = "Select atleat one intrests";
        }
        setErrors(err);
        return err.intrests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;
  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handleSumbitClick = () => {};
  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => {
          return (
            <div
              key={index}
              className="heading"
              onClick={() => setActiveTab(index)}
            >
              {t.name}
            </div>
          );
        })}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSumbitClick}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default TabForm;
