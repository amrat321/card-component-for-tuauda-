import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import "./shaduleCard.css";
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

export default function SeduleCard() {
  //   const classes = useStyles();

  return (
    <div>
      <Container maxWidth>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={6} lg={3} xl={3}>
            <div className="cardMain">
              <Grid container>
                <Grid item xs={2} sm={2} lg={2} xl={2}>
                  <div className="dateSide">
                    <p style={{ color: "#0253AE", fontSize: "13.5718px" }}>
                      Dec <br />
                      2017
                    </p>
                  </div>
                </Grid>
                <Grid item xs={10} sm={10} lg={10} xl={10}>
                  <div className="dataSide">
                    <div className="_events_heading">
                      <div style={{ fontWeight: "bold" }}>
                        Nombre del Servicio
                      </div>
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
                    <div
                      style={{
                        color: "#475380",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        margin: "10px auto",
                        width: "95%",
                        opacity: 0.4,
                        fontSize: "11.633px",
                      }}
                    >
                      <BiUser size={13} />
                      <span style={{ marginLeft: 10 }}>Polmeria S.A</span>
                    </div>
                    <div
                      style={{
                        color: "#475380",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        margin: "10px auto",
                        width: "95%",
                        opacity: 0.4,
                        fontSize: "11.633px",
                      }}
                    >
                      <BiUser />
                      <span style={{ marginLeft: 10 }}>10:00 AM</span>
                    </div>
                    <div
                      style={{
                        color: "#475380",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        margin: "10px auto",
                        width: "95%",
                        opacity: 0.4,
                        fontSize: "11.633px",
                      }}
                    >
                      <BiUser />
                      <span style={{ marginLeft: 10 }}>
                        Av. Balboa. Edificio
                      </span>
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
