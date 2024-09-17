export const codeRoles = `curl "https://api.permit.io/v2/schema/{project_id}/{env_id}/roles"
-H 'authorization: Bearer API_SECRET_KEY'
--data-raw '{"key":"admin","name":"admin"}'`;

export const codeUsers = `curl "https://api.permit.io/v2/facts/{project_id}/{env_id}/users"
-H 'authorization: Bearer API_SECRET_KEY'
--data-raw '{"key":"unique_id_for_username","email":"username@domain.com","first_name":"Jon"}'`;

export const codeResource = `curl "https://api.permit.io/v2/schema/{project_id}/{env_id}/resources"
-H 'authorization: Bearer API_SECRET_KEY'
--data-raw '{"key":"repo","name":"repo","actions":{"create":{"name":"create"},"view":{"name":"view"},"edit":{"name":"edit"}}}'`;

export const codePermissions = `curl "https://api.permit.io/v2/schema/{project_id}/{env_id}/roles/admin/permissions"
-H 'authorization: Bearer API_SECRET_KEY'
--data-raw '{"permissions":["repo:create","repo:view","repo:edit"]}'`;
