function calculateCommission() {
  let cost = document.getElementById('projectCost').value;
  if (cost && cost > 0) {
    let commission = cost * 0.10;
    document.getElementById('result').innerText = `You earn: ₹${commission.toLocaleString()}`;
  } else {
    document.getElementById('result').innerText = "Please enter a valid project cost.";
  }
}

function shareReferral() {
  if (navigator.share) {
    navigator.share({
      title: 'Refer & Earn 10% Commission',
      text: 'Refer clients to me and earn 10% commission from the total project value!',
      url: window.location.href
    }).catch(err => console.log(err));
  } else {
    alert("Sharing not supported on this device. Copy the link manually.");
  }
}
