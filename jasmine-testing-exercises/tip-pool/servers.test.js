describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update the server table with the new server on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let addedRow = document.querySelectorAll("#serverTable td");

    expect(document.getElementById("serverTable").rows.length).toEqual(2);
    expect(addedRow.length).toEqual(2);
    expect(addedRow[0].innerText).toEqual("Alice");
    expect(addedRow[1].innerText).toEqual("$0.00")
  });

  afterEach(function () {
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});


