import React from "react";

const Header = () => {
  return (
    <div className="flex mx-3 h-20 justify-between items-center">
      <h3 className="font-serif font-semibold text-3xl">Knowledge Cafe</h3>
      <img
        className="w-20 h-20 rounded-full"
        src="https://img.freepik.com/free-vector/modern-people-doing-cultural-activities_23-2148625186.jpg?w=740&t=st=1680266604~exp=1680267204~hmac=aef6c414a2535d9a4033130c79ea8fb1d39e70df3f45cf62ad6c38cdf1c7e52a"
        alt=""
      />
    </div>
  );
};

export default Header;
