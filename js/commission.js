function calculateCommission() {
    const cost = parseFloat(document.getElementById('projectCost').value);
    if (!cost || cost <= 0) {
      document.getElementById('result').innerText = "⚠ Please enter a valid project cost.";
      return;
    }
    const commission = cost * 0.10;
    document.getElementById('result').innerText = `💵 Your Commission: ₹${commission.toLocaleString()}`;
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
