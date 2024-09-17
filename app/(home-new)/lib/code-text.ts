export const rbacCode = `default allow := false
allow if {
  some role in data.users[input.user].roles
  actions := roles[role][input.resource.type]
  input.action in actions
}
roles["Banker"]["Loan"] := [
	 "View","Approve","Decline"
]`;

export const abacCode = `default allow := false
allow if {
  some _, allowed_actions in conditions
  input.action in allowed_actions[input.resource.type]
}
conditions["Weekend Shift Employee"]["Database"] := [
	 "Read", "Update", "Backup", "Restore"
] if {
	 work_days := { day |
    day := data.users[input.user].attributes.work_days[_]
  }
  count({"Saturday", "Sunday"} & work_days) > 0
}`;

export const rebacCode = `default allow := false
allow if {
	 patient_caregiver = true
}
patient_caregiver if {
	 user_roles := data.users[input.user].roles
	 some assigned_resource, assigned_roles in user_roles
  some role in assigned_roles
  input.action in roles[role][input.resource.type]
  assigned_resource in resource_relationships
}
resource_relationships[resource] {
  related_resources := graph.reachable(
    full_graph,{input.resource.id}
  )
  some resource in related_resources
}
full_graph[child] := parent if {
	 all_resources := [resource | resource := data.resources[_]]
 	some child, parent_resource in object.union_n(all_resources)
	 parent := [object.get(parent_resource, "parent_id", null)]
}
roles["Caregiver"]["Record"] := ["View", "Update", "Share", "Archive"]`;
