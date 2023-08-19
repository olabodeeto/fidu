import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  marginBottom: "2rem",
  padding: "0.60rem",
  borderRadius: "0.54rem",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    {...props}
    expandIcon={<PlayArrowIcon sx={{ fontSize: "1.4rem", color: "#0B0812" }} />}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#fff",
  fontSize: "1.4rem",
  fontWeight: 700,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  //   borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FaqComponent() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    //@ts-ignore

    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <div>
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <h2>Why FIDU?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
              nam.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <h2>How can i start?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p className=" font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
              nam.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <h2>How can i start?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p className=" font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              magni!
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
