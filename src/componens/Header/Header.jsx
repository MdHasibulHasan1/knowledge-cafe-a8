import React from "react";

const Header = () => {
  return (
    <div className="flex mx-3 h-20 justify-between items-center">
      <h3 className="font-medium text-3xl">Knowledge Cafe</h3>
      <div>
        <ul className="flex gap-3 items-center h-20">
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/home">Home</a>
          </li>
          <img
            className="w-20 h-20 rounded-full"
            src="https://img.freepik.com/free-vector/modern-people-doing-cultural-activities_23-2148625186.jpg?w=740&t=st=1680266604~exp=1680267204~hmac=aef6c414a2535d9a4033130c79ea8fb1d39e70df3f45cf62ad6c38cdf1c7e52a"
            alt=""
          />
        </ul>
      </div>
    </div>
  );
};

export default Header;
