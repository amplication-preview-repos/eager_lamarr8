import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { CodeFileList } from "./codeFile/CodeFileList";
import { CodeFileCreate } from "./codeFile/CodeFileCreate";
import { CodeFileEdit } from "./codeFile/CodeFileEdit";
import { CodeFileShow } from "./codeFile/CodeFileShow";
import { SyntaxList } from "./syntax/SyntaxList";
import { SyntaxCreate } from "./syntax/SyntaxCreate";
import { SyntaxEdit } from "./syntax/SyntaxEdit";
import { SyntaxShow } from "./syntax/SyntaxShow";
import { ErrorLogList } from "./errorLog/ErrorLogList";
import { ErrorLogCreate } from "./errorLog/ErrorLogCreate";
import { ErrorLogEdit } from "./errorLog/ErrorLogEdit";
import { ErrorLogShow } from "./errorLog/ErrorLogShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Syte"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="CodeFile"
          list={CodeFileList}
          edit={CodeFileEdit}
          create={CodeFileCreate}
          show={CodeFileShow}
        />
        <Resource
          name="Syntax"
          list={SyntaxList}
          edit={SyntaxEdit}
          create={SyntaxCreate}
          show={SyntaxShow}
        />
        <Resource
          name="ErrorLog"
          list={ErrorLogList}
          edit={ErrorLogEdit}
          create={ErrorLogCreate}
          show={ErrorLogShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
