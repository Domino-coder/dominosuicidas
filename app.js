// SPDX-License-Identifier: GPL-3.0 
pragma solidity >= 0.8.0 < 0.9.0;
/// @title A contract for demonstrate how to build a to-do list application
/// @notice For now, this contract just show how to add the task

///Create a struc for your task
contract Block {
 struct Task {
     string task;
     bool isDone;

    }
    ///Mapping to store our task array with an associated user address
    mapping(address => Task[]) private Users;

    ///Method to mainpulate our task in the conttract
    function addTask(string calldata _task) external{
        Users[msg.sender].push(Task({
            task: _task,
            isDone: false
        }));

    }
    ///Method helps read the value in the task
    function getTask(uint _taskIndex) external view returns(Task memory){
    Task storage task = Users[msg.sender][_taskIndex];
        return task;
    }
    ///Update Task Values
    function updateStatus(uint256 _taskIndex, bool _status) external{
        Users[msg.sender][_taskIndex].isDone = _status;

    }
    /// Delete task method
    function deleteTask(uint256 _taskIndex) external{
        delete Users[msg.sender][_taskIndex];

    }
    ///Get Task count 
    function getTaskCount() external view returns(uint256)
    {
        return Users[msg.sender].length;
    }

} 