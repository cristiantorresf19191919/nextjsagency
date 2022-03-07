import React from 'react'

function If({ condition, Then=null, Else=null, children=null }) {
    if (condition) {
        if(children){
          return <>{children}</>;
        }else{
          return  <>{Then}</>
        }
      } else {
        if(Else){
          return  <>{Else}</>
        }
        return null;
      }
}
export default If