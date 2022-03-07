import React from 'react'

function If({ condition, Then=null, Else=null, children=null }) {
    if (condition) {
        if(children){
          return <Fragment>{children}</Fragment>;
        }else{
          return  <Fragment>{Then}</Fragment>
        }
      } else {
        if(Else){
          return  <Fragment>{Else}</Fragment>
        }
        return null;
      }
}
export default If