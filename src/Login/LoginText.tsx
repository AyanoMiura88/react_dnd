import { TextField } from "@material-ui/core";

interface Props {
  id: string;
  placeholder: string;
  label: string;
  variant: "standard" | "filled" | "outlined" | undefined;
  margin: "none" | "dense" | "normal" | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginText = (props: Props) => {
  const { id, placeholder, label, variant, margin, onChange } = props;
  return (
    <div>
      <TextField
        id={id}
        placeholder={placeholder}
        label={label}
        variant={variant}
        margin={margin}
        onChange={onChange}
        color="secondary"
      />
    </div>
  );
};

export default LoginText;
