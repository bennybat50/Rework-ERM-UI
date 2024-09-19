import React from "react";
import { LuUsers } from "react-icons/lu";
import {
  FiBell,
  FiSearch,
  FiPlus,
} from "react-icons/fi";
const Courses = () => {
  return (
    <div style={{ margin: "auto", width:'100vw' }}>
      <div style={{ display: "flex", marginBottom: "30px", gap: "20px", width:'75%'}}>
        <div
          style={{
            borderRight: "1px solid grey",
            display: "flex",
            alignItems: "center",
            width:'100%',
            justifyContent: "space-between",
            padding: "1px",
          }}
        >
          <div style={{ fontWeight: "700", fontSize: "20px" }}>
            Manage Courses
          </div>
          <div
            style={{
              display: "flex",
              width: "10%",
              justifyContent: "space-around",
            }}
          >
            <div>
              <FiSearch />
            </div>
            <div>
              <FiBell />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", width:'19%', justifyContent:'space-around' }}>
          <div>Jones Ferdinand</div>
          <div>
            <LuUsers />
          </div>
        </div>
      </div>
     
      <div style={{ display: "flex", gap: "20px", }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100px",
            border: "1px solid",
            justifyContent: "space-between",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <div> New</div>
          <div>
            {" "}
            <FiPlus />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "37%",
            border: "1px solid #eaeaea",
            padding: "5px",
            borderRadius: "5px",
            justifyContent: "space-between",
          }}
        >
          <div>Search</div>
          <div>
            <FiSearch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses