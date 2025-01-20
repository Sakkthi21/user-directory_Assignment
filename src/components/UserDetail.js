import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';

const UserDetail = () => {
  const { userId } = useParams();
  const { users } = useSelector((state) => state.users);
  const user = users.find((u) => u.id === parseInt(userId));

  if (!user) {
    return <Typography>User not found.</Typography>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{user.name}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        <Typography>Company: {user.company.name}</Typography>
        <Typography>Website: {user.website}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to="/" size="small" color="primary">
          Go Back
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserDetail;