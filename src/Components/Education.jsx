import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ( theme => ({
    mainContainer: {
        background: '#1F2235'
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padeding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }   
    },
    heading: {
        color: "#FFFFFF",
        padding: "0",
        fontWeight: "700",
        // textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}));

export default function Edication() {
    const classes = useStyles();
    return (
        <div className="education" id="education">
        <div className="container">
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Education
            </Typography>
            <div className="commonBorder"></div>
            <Box component="div" className={classes.timeLine}>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2017-2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" className={classes.subHeading}>
                        Bachelor Of Science(B. Sc)
                    </Typography>
                    <Typography variant="body1" style={{color: "tomato"}} >
                        University Of Development Alternative
                    </Typography>
                    <Typography variant="subtitle1" style={{color: "tan"}}>
                        Dhanmondi, Dhaka
                    </Typography>
                </Box>
              {/* College */}
              <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                  2014-2016
              </Typography>
                <Box component="div" className={classes.timeLineItem}>
                  <Typography variant="h5" className={classes.subHeading}>
                     Higher Secondary Certificate
                  </Typography>
                  <Typography variant="body1" style={{color: "tomato"}} >
                      Bajitpur College
                  </Typography>
                  <Typography variant="subtitle1" style={{color: "tan"}}>
                      Bajitpur, Kishoreganj
                  </Typography>
                </Box>
              {/* School */}
              <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                  2012-2014
              </Typography>
              <Box component="div" className={classes.timeLineItem}>
                  <Typography variant="h5" className={classes.subHeading}>
                      Secondary School Certificate
                  </Typography>
                  <Typography variant="body1" style={{color: "tomato"}} >
                      Bajitpur Hafiz Abdur Razzak Pilot High School
                  </Typography>
                  <Typography variant="subtitle1" style={{color: "tan"}}>
                     Bajitpur, Kishoreganj
                  </Typography>
              </Box>
            </Box>
        </Box>
        </div>
        </div>
    )
}
