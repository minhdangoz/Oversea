var msg = "Oversea - Nơi đi đến thiên đường !";
var pos = 0;
var spacer = " -- ";      
var time_length = 150;
function Title()
{
  document.title = msg.substring(pos, msg.length) + spacer + msg.substring(0, pos);
  pos++;
  if (pos > msg.length) pos=0;
  window.setTimeout("Title()",time_length);
}
Title();