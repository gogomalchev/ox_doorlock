import { Box, TextField } from '@mui/material';
import { groupFieldsState } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';

const GroupFields: React.FC = () => {
  const [groupFields, setGroupFields] = useRecoilState(groupFieldsState);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number,
    property: 'name' | 'grade'
  ) => {
    // i hate this
    setGroupFields((prevState) => {
      return prevState.map((item, indx) =>
        index === indx ? { ...item, [property]: e.target.value } : item
      );
    });
  };

  return (
    <>
      {groupFields.map((group, index) => (
        <Box key={`group-${index}`} style={{ marginBottom: '0.7rem' }} display="flex">
          <TextField
            label="Group name"
            fullWidth
            sx={{ marginRight: 0.5 }}
            value={group.name}
            onChange={(e) => handleChange(e, index, 'name')}
          />
          <TextField
            label="Min. grade"
            fullWidth
            sx={{ marginLeft: 0.5 }}
            value={group.grade}
            onChange={(e) => handleChange(e, index, 'grade')}
          />
        </Box>
      ))}
    </>
  );
};

export default GroupFields;
