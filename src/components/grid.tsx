import * as React from "react";
import styled from "styled-components";
import { px, colors } from "../models";
import times from "lodash/times";

interface GridColumnProps {
  width: number;
}
const GridColumn = styled.div`
  width: ${(props: GridColumnProps) => px(props.width)};
  height: 100vh;
  background-color: ${colors.redAlpha5};
`;

const GridWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;
interface GridProps {
  width: number;
}
const Grid = styled.div`
  width: ${(props: GridProps) => px(props.width)};
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface GridProps {
  gridWidth: number;
  columns: number;
  columnWidth: number;
}
const GridComp = (props: GridProps) => (
  <GridWrapper>
    <Grid width={props.gridWidth}>
      {times(props.columns, num => (
        <GridColumn key={num} width={props.columnWidth} />
      ))}
    </Grid>
  </GridWrapper>
);

export default GridComp;
