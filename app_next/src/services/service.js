export async function SaveWorkingPlace(data) {

    const response = await fetch(`/api/working_place`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}

export async function SaveWorkingPlace_ng(data) {

  const response = await fetch(`http://localhost:8080/api/working_place`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
  return await response.json();
}

