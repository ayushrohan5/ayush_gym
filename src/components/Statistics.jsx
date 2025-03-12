import React, { useState, useEffect } from "react";
import { CgGym } from "react-icons/cg";
import { MdOutlineSportsGymnastics, MdOutlineCardMembership, MdClass } from "react-icons/md";

const Statistics = () => {
  const [count, setCount] = useState({
    members: 0,
    classes: 0,
    trainers: 0,
    gyms: 0,
  });

  useEffect(() => {
    const targetCounts = { members: 15, classes: 5, trainers: 10, gyms: 90 };
    const timer = setInterval(() => {
      setCount((prevCount) => {
        const newCount = {
          members: prevCount.members < targetCounts.members ? prevCount.members + 1 : prevCount.members,
          classes: prevCount.classes < targetCounts.classes ? prevCount.classes + 1 : prevCount.classes,
          trainers: prevCount.trainers < targetCounts.trainers ? prevCount.trainers + 1 : prevCount.trainers,
          gyms: prevCount.gyms < targetCounts.gyms ? prevCount.gyms + 1 : prevCount.gyms,
        };

        if (Object.values(newCount).every((val, i) => val === Object.values(targetCounts)[i])) {
          clearInterval(timer);
        }
        return newCount;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {[
            { icon: <MdOutlineCardMembership size={40} />, value: count.members, label: "Members" },
            { icon: <MdClass size={40} />, value: count.classes, label: "Classes" },
            { icon: <MdOutlineSportsGymnastics size={40} />, value: count.trainers, label: "PT" },
            { icon: <CgGym size={40} />, value: count.gyms, label: "Gyms" },
          ].map((stat, index) => (
            <div key={index} className="flex items-center space-x-4 w-full md:w-1/4 p-6 text-center">
              {stat.icon}
              <div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-xl font-light">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
