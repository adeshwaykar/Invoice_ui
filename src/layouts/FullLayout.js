import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import { useEffect, useState } from "react";
import RemainingRegistrationModal from "../InvoiceMangementComponent/LoginRegister/RemainingRegistrationModal";

const FullLayout = () => {
const [userLevel,setUserLevel]=useState(localStorage.getItem("userLevel"))
  
  return (
    <main>
      {/********header**********/}
      <Header />
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********Middle Content**********/}
          <Container className="p-4" fluid>
          {userLevel=="1"?(<RemainingRegistrationModal isPendimg={true}/>):(<Outlet />)}
            
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
