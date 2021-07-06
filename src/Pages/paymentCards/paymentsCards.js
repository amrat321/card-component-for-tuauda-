import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import "./paymentsCard.css";
import { BiUser } from "react-icons/bi";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }),
// );

export default function PaymentsCard() {
  //   const classes = useStyles();

  return (
    <div>
      <Container maxWidth>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={6} lg={3} xl={3}>
            <div className="payment_card">
              <Grid container>
                <Grid item xs={2} sm={2} lg={2} xl={2}>
                  <div className="_litle_card">
                   <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', }}>
                       <div style={{fontSize:7, color:'#fff'}}><span>. . . .</span> <span>2873</span></div>
                       <div style={{fontSize:7, color:'#fff'}}>123</div>
                   </div>
                   <div style={{fontSize:10, color:'#fff', fontWeight:'bold',marginTop:30 }}>Adam Smith</div>
                  </div>
                </Grid>
                <Grid item xs={10} sm={10} lg={10} xl={10}>
                  <div className="card_data">
                  
                    <div style={{flex:1}}>
                    <div
                      style={{
                        color: "#475380",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        margin: "10px auto",
                        
                        opacity: 0.4,
                        fontSize: "11.633px",
                      }}
                    >
                     
                      <span style={{ marginLeft: 10 }}><span>****</span> <span>****</span> <span>****</span><span>1234</span></span>
                    </div>
                    <div
                      style={{
                        color: "#475380",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        margin: "10px auto",
                        
                        opacity: 0.4,
                        fontSize: "11.633px",
                      }}
                    >
                     
                      <span style={{ marginLeft: 10 }}>17/2020</span>
                    </div>
                    </div>
                    <div className="card_num">
                     
                     <div
                       style={{
                         backgroundColor: "#02DA80",
                         color: "#fff",
                         padding: 4,
                         borderRadius: 10,
                         fontSize: 12,
                       }}
                     >
                       AGENDADO
                     </div>
                   </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
