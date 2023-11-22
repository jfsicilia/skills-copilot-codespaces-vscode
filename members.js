function skillMembers()
{
    var skill = document.getElementById("skill").value;
    var members = document.getElementById("members");
    var member = document.getElementById("member");
    if (skill === "Other")
    {
        members.style.display = "none";
        member.style.display = "block";
    }
    else
    {
        members.style.display = "block";
        member.style.display = "none";
    }
}

