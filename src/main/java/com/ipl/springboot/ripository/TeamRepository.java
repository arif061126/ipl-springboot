package com.ipl.springboot.ripository;

import com.ipl.springboot.model.Team;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByTeamName(String teamName);
}
