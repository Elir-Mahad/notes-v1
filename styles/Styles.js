import styled from "styled-components";

export const WholeApp = styled.div`
  font-family: Roboto, sans-serif;
`;

export const Heading = styled.h1`
  color: red;
  font-size: 3rem;
`;

export const CustomMenu = styled.div`
  position: relative;
  z-index: 2;
  position: sticky;
  top: 0;
  padding: 0.5rem;
  font-family: "Metrophobic", sans-serif;
  background-color: white;
  border-bottom: 1px solid black;
`;

export const BlogMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBlogsMenu = styled.div`
  width: 20rem;
  border: 1px solid grey;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1rem;
  @media (max-width: 500px) {
    width: 15rem;
  }
`;

export const TbMheading = styled.p`
  width: 95%;
  border-right: 1px solid black;
  padding: 0.5rem;
`;

export const TbMicon = styled.p`
  padding: 0.5rem;
`;

export const BlogsMenu = styled.div`
  width: 20rem;
  height: 10rem;
  overflow: auto;
  padding-top: 1rem;
  background-color: #f6f6f6;
  border-radius: 5px;
  @media (max-width: 500px) {
    width: 15rem;
  }
`;

export const BlogName = styled.p`
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 0.5rem;
`;

// Blogs page

export const BlogContainer = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
  @media (max-width: 500px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

// Individual blog

export const PostTitle = styled.p`
  font-size: 1.5rem;
  text-align: left;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: lightgrey;
`;

export const BlogBody = styled.div`
  padding: 1rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  height: 100%;
  border-bottom: 1px solid black;
`;

export const SubHeading = styled.p`
  margin-bottom: 1rem;
  margin-top: 1rem;
  line-height: 2.5rem;
  letter-spacing: 0.01rem;
  font-size: 1.4rem;
  font-weight: 800;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  text-indent: 50px;
  line-height: 3rem;
  // letter-spacing: 0.1rem;
  font-size: 1.3rem;
  // font-weight: 100;
`;

export const Sentence = styled.p`
  margin-bottom: 0.5rem;
  line-height: 3rem;
  font-size: 1.2rem;
  // background-color: red;
`;

export const HighlightedSentence = styled.p`
  //
`;

export const ListHeading = styled.h2`
  //
`;

export const Litem = styled.li`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  margin-left: 2.3rem;
  list-style-type: square;
`;

export const LitemTwo = styled.li`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  margin-left: 3.2rem;
  list-style-type: circle;
`;

export const Code = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  padding: 1rem;
  background-color: #f6f8fa;
  border-radius: 5px;
  line-height: 2rem;
`;
