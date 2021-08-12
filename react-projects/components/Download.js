import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';

export default function Download({link}) {
  
  function downloadZip() {
    var a = document.createElement("a");
    a.setAttribute('download','');
    a.href = `/components/${link}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
  
  return (
    <div className="download">
      <h3>Download this Component</h3>
      <Button variant="contained" color="primary" onClick={downloadZip}>
        <GetAppIcon />
      </Button>
    </div>
  );
}