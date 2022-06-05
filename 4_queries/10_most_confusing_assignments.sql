SELECT assignments.id, name, day, chapter, count(assistance_requests) as total_assistance
FROM assistance_requests 
JOIN assignments ON assignments.id = assignment_id
GROUP BY assignments.id
ORDER BY total_assistance DESC;
