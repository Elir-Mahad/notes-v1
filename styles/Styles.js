import styled from "styled-components";

export const WholeApp = styled.div`
  font-family: "IBM Plex Mono", monospace;
  margin-left: 3rem;
  margin-right: 3rem;
  @media (max-width: 500px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

// Menu

export const CustomMenu = styled.div`
  // position: relative; was used before, keep here just incase build breaks
  z-index: 2;
  position: sticky;
  top: 0;
  width: 20rem;
  height: 3.67rem;
  margin-left: 1rem;
  background-color: white;
  display: block;
  margin: auto;
  margin-top: 1rem;
`;

export const BlogMenuBox = styled.div`
  //
`;

export const TopBlogsMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  font-size: 1.1rem;
  border: 1px solid black;
  @media (max-width: 500px) {
    width: 15rem;
  }
`;

export const TbMheading = styled.p`
  width: 95%;
  border-right: 1px solid black;
  padding-left: 1rem;
`;

export const TbMicon = styled.p`
  padding-right: 1rem;
  padding-left: 1rem;
  cursor: pointer;
`;

export const BlogsMenu = styled.div`
  width: 20rem;
  height: 10rem;
  border: 1px solid black;
  overflow: auto;
  padding: 0.5rem;
  background-color: #f6f6f6;
  @media (max-width: 500px) {
    width: 15rem;
  }
`;

export const BlogName = styled.p`
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 0.5rem;
`;

// Individual blog

export const PostTitle = styled.h2`
  font-weight: 100;
  text-align: left;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: lightgrey;
`;

export const BlogBody = styled.div`
  padding: 1rem;
`;

export const SubHeading = styled.h3`
  margin-bottom: 1rem;
  margin-top: 1rem;
  line-height: 2.5rem;
  letter-spacing: 0.01rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  text-indent: 50px;
  line-height: 3rem;
`;

export const Sentence = styled.p`
  margin-bottom: 0.5rem;
  line-height: 3rem;
`;

export const HighlightedSentence = styled.p`
  //
`;

export const ListHeading = styled.h2`
  //
`;

export const Litem = styled.li`
  margin-bottom: 1rem;
  margin-left: 2.3rem;
  list-style-type: square;
`;

export const LitemTwo = styled.li`
  margin-bottom: 1rem;
  margin-left: 3.2rem;
  list-style-type: circle;
`;

export const Code = styled.p`
  margin-bottom: 0.5rem;
  padding: 1rem;
  background-color: #f6f8fa;
  border-radius: 5px;
  line-height: 2rem;
  border: 1px solid grey;
`;

export const PicWrapper = styled.div`
  padding: 1rem;
`;
