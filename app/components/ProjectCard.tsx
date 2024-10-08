import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  authors: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  authors,
  link,
}) => (
  <Card>
    <CardMedia component="img" height="140" image={image} alt={title} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {authors}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Saiba mais:{" "}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {link}
        </a>
      </Typography>
    </CardContent>
  </Card>
);

export default ProjectCard;
